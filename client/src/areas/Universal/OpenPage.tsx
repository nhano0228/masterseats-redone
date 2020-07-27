import Router from 'next/router'

const OpenPage = (new_page: string, setLoading?: (newLoad: boolean) => void) => {
    Router.push(new_page).then(() => {
        /*if (setLoading !== null) {
            setLoading(false)
        }*/
    })
}

export default OpenPage