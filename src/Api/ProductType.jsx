import {BaseUrl} from "../env";
export async function getProductType() {
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
export async function removeProductType(id) {
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
export async function editProductType() {
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
export async function insertProductType() {
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
