import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { API } from "../global"

export function AddUser() {
    const [name, setName] = useState("");
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [website, setWebsite] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");
    const [company, setCompany] = useState("");
    const navigate = useNavigate();



    const handleAddUser = () => {
        const newUser = {
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



        fetch(`${API}`, {
            method: "POST",
            body: JSON.stringify(newUser),
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
                <Button variant="contained" onClick={handleAddUser}>Add Product</Button>
            </div>
        </div>
    )
}