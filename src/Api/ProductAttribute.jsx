import {BaseUrl} from "../env";
export async function getProductAttribute() {
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
export async function insertProductAttribute() {
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
export async function editProductAttribute() {
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
export async function removeProductAttribute(id) {
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
