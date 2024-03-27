import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { API } from "../global"

export function EditUser() {
    //Add Product +productDetails

    const { userId } = useParams();

    const [user, setUser] = useState(null);
    console.log(userId)

    useEffect(() => {
        fetch(`${API}/${userId}`, {
            method: "GET"
        })
            .then((res) => res.json())
            .then((pd) => setUser(pd)
            )
    }, [])
    console.log(user)
    return user ? <EditUserForm user={user} /> : "Loading"



}

function EditUserForm({ user }) {

    const [name, setName] = useState(user.name);
    const [username, setUserName] = useState(user.username);
    const [email, setEmail] = useState(user.email);
    const [website, setWebsite] = useState(user.website);
    const [phone, setPhone] = useState(user.phone);
    const [city, setCity] = useState(user.address.city);
    const [company, setCompany] = useState(user.company.name);
    const navigate = useNavigate();



    const handleEditUser = () => {
        const updateUser = {
            name,
            username,
            email,
            address: {
                city,
            },
            website,
            phone,
            company: {
                "name": company,
            },



        }


        fetch(`${API}/${user.id}`, {
            method: "PUT",
            body: JSON.stringify(updateUser),
            headers: { 'Content-Type': 'application/json' }
        })
            .then((res) => res.json())
            .then(() => navigate("/"))

        //clear input fields after adding products
        setName("")
        setUserName("")
        setEmail("")
        setWebsite("")
        setPhone("")
        setCity("")
        setCompany("")

    }
    return (

        <div className="d-flex justify-content-center align-items-center mt-5">
            <div className="w-50 d-flex flex-column border bg-white shadow rounded px-5 pt-3 pb-5 gap-4">


                <TextField id="name" label="Name" variant="outlined" value={name} onChange={(event) => setName(event.target.value)} />
                <TextField id="username" label="User name" variant="outlined" value={username} onChange={(event) => setUserName(event.target.value)} />
                <TextField id="email" label="Email Address" variant="outlined" value={email} onChange={(event) => setEmail(event.target.value)} />
                <TextField id="website" label="Website" variant="outlined" value={website} onChange={(event) => setWebsite(event.target.value)} />
                <TextField id="phone" label="Phone Number" variant="outlined" value={phone} onChange={(event) => setPhone(event.target.value)} />
                <TextField id="city" label="City" variant="outlined" value={city} onChange={(event) => setCity(event.target.value)} />
                <TextField id="company" label="Company" variant="outlined" value={company} onChange={(event) => setCompany(event.target.value)} />
                <Button variant="contained" onClick={handleEditUser}>Edit</Button>
            </div>
        </div>
    )
}