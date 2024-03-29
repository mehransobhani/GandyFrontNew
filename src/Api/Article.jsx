import {BaseUrl} from '../env';
export async function getArticle(page) {
    const response = await fetch(BaseUrl + "article/getAll/"+page,
        {
            method: 'POST', 
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            }
        }
    )
    return response;
}export async function insertArticle(title,description,url,content,image) {

    const formdata = new FormData();
    formdata.append("title", title);
    formdata.append("description", description);
    formdata.append("url", url);
    formdata.append("content", content);
    formdata.append("image", image);
    formdata.append("create_at","2024-02-12 12:23");
    // create_at
    const response = await fetch(BaseUrl + "article/add",
        {
            method: 'POST',
            credentials: 'include',
            body:formdata,
            headers: {
                "Content-Type": "multipart/form-data",
            }
        }
    )
    return response;
}export async function editArticle(title,description,url,content,image,id) {
    const formdata = new FormData();
    formdata.append("title", title);
    formdata.append("description", description);
    formdata.append("url", url);
    formdata.append("content", content);
    formdata.append("image", image);
    formdata.append("id", id);

    const response = await fetch(BaseUrl + "article/add",
        {
            method: 'POST',
            credentials: 'include',
            body:formdata,
            headers: {
                "Content-Type": "application/json",
            }
        }
    )
    return response;
}export async function removeArticle(id) {
    const response = await fetch(BaseUrl + "article/delete/"+id,
        {
            method: 'POST', 
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            }
        }
    )
    return response;
}

export async function getArticleByWords(name) {
    const response = await fetch(BaseUrl + "article/getArticleByWords",
        {
            method: 'POST',
            body: JSON.stringify(
                {
                    name:name
                }
            ),
            headers: {
                "Content-Type": "application/json",
            }
        }
    )
    return response.json();
}