import {defineStore} from "pinia";
import {ref, watch} from "vue";
import {fetchGet, normalizeResponse} from "@/shared/methods/api.ts";
import {IPost} from "@/shared/interfaces/post.ts";

const BASEURL = import.meta.env.VITE_APP_BASE_URL
export const usePostStore = defineStore('post', () =>{

    const posts = ref<IPost[]>([])
    const isLoadingPosts = ref(false)

    const postsRead = ref<IPost[]>([])

    const setPostsByApi = async () => {
        isLoadingPosts.value = true
        const URL = BASEURL + import.meta.env.VITE_APP_GET_POSTS;
        let response = await fetchGet(URL)
        const defaultPosts = normalizeResponse(response).result
        defaultPosts.forEach((post:IPost) => {
            post.isRead = false
        })
        posts.value = defaultPosts
        isLoadingPosts.value = false
    }


    const setPostFavorite = (id:number) => {
       const list:IPost[] = postsRead.value
        list.forEach((p:IPost)=>{
        if(p.id === id){
            p.isFavorite = !p.isFavorite
        }
       })
    }
    const setPostRead = (id:number) => {
        const all = posts.value
        const allRead = postsRead.value
        let find = all.find(post => post.id === id)
        if(find){
            // есть в непрочитанных
            find.isRead = true
            const addRead = [find, ...allRead]
            const deletePosts = all.filter(post => post.id !== id)

            postsRead.value = addRead
            posts.value = deletePosts
        } else {
            // нет в непрочитанных
            find = allRead.find(post => post.id === id)
            if(find){
                find.isRead = false
                delete find?.isFavorite
                const addPosts = [find, ...all]
                const deleteRead = allRead.filter(post => post.id !== id)

                posts.value = addPosts
                postsRead.value = deleteRead
            } else {
                return
            }

        }
    }

    const getPostTitleById = (id:number, isRead:boolean) => {
        const find = !isRead ? posts.value.find(post => post.id === id) : postsRead.value.find(post => post.id === id)
        return find?.title
    }
    const setPostTitleById = (id:number, isRead:boolean, value:string) => {
        if(isRead){
            postsRead.value.forEach((p) => {
                if(p.id === id) p.title = value
            })
        } else {
            posts.value.forEach((p) => {
                if(p.id === id) p.title = value
            })
        }
    }


    // LOCAL STORAGE
    const postsReadOnLocalStorage = localStorage.getItem('postsRead')
    const postsOnLocalStorage = localStorage.getItem('posts')

    if(postsReadOnLocalStorage) postsRead.value = JSON.parse(postsReadOnLocalStorage)._value
    postsOnLocalStorage ?posts.value = JSON.parse(postsOnLocalStorage)._value : setPostsByApi()
    watch(() => postsRead, (state) => {
        localStorage.setItem('postsRead', JSON.stringify(state))
    }, {deep: true})
    watch(() => posts, (state) => {
        localStorage.setItem('posts', JSON.stringify(state))
    }, {deep: true})

    const getPostsFavorite = () => {
        return postsRead.value.filter(post => post.isFavorite)
    }

    return{
        posts,
        postsRead,
        isLoadingPosts,
        setPostsByApi,
        setPostFavorite,
        getPostsFavorite,
        setPostRead,
        getPostTitleById,
        setPostTitleById,
    }
})
