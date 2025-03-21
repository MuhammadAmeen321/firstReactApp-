import React, { useState } from 'react';

export default function Form() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [submittedData, setSubmittedData] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData(formData);
    };

    return (
        <div className="form">
            <h2>Form</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required onChange={handleChange} />
                <br />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required onChange={handleChange} />
                <br />
                <label htmlFor="phone">Phone:</label>
                <input type="tel" id="phone" name="phone" required onChange={handleChange} />
                <br />
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required onChange={handleChange} />
                <br />
                <input type="submit" value="Submit" />
            </form>
            {submittedData && (
                <div>
                    <h3>Submitted Data:</h3>
                    <p>Name: {submittedData.name}</p>
                    <p>Email: {submittedData.email}</p>
                    <p>Phone: {submittedData.phone}</p>
                    <p>Message: {submittedData.message}</p>
                </div>
            )}
        </div>
    );
}
