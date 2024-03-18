import {BaseUrl} from '../env';
export async function getArticle() {
    const response = await fetch(BaseUrl + "",
        {
            method: '',
            body: JSON.stringify(
                {
                }
            ),
            headers: {
                "Content-Type": "application/json",
            }
        }
    )
    return response;
}export async function insertArticle() {
    const response = await fetch(BaseUrl + "",
        {
            method: '',
            body: JSON.stringify(
                {
                }
            ),
            headers: {
                "Content-Type": "application/json",
            }
        }
    )
    return response;
}export async function editArticle() {
    const response = await fetch(BaseUrl + "",
        {
            method: '',
            body: JSON.stringify(
                {
                }
            ),
            headers: {
                "Content-Type": "application/json",
            }
        }
    )
    return response;
}export async function removeArticle(id) {
    const response = await fetch(BaseUrl + "",
        {
            method: '',
            body: JSON.stringify(
                {
                }
            ),
            headers: {
                "Content-Type": "application/json",
            }
        }
    )
    return response;
}
