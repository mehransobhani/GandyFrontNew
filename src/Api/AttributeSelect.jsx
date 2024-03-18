import {BaseUrl} from "../env";

export async function getAttributeSelect() {
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

export async function insertAttributeSelect() {
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

export async function editAttributeSelect() {
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

export async function removeAttributeSelect(id) {
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
