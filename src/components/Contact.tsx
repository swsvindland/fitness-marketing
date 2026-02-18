import { useState } from 'react';
import axios from 'axios';
import {Button} from "@/components/Button";


const Contact = () => {
    const [email, setEmail] = useState('');
    const [body, setBody] = useState('');
    const [phone, setPhone] = useState<string | undefined>(undefined);
    const [sent, setSent] = useState(false);

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = async (event) => {
        event.preventDefault();
        setSent(true);
        await axios.post('api/sendEmail', {
            email,
            body,
            phone,
        });
    };

    if (sent) {
        return (
            <div>
                <h1>Thank you for your message!</h1>
                <p>I will get back to you shortly</p>
            </div>
        );
    }

    return (
        <form className="bg-white p-4 flex justify-center items-center flex-col gap-4">
            <input
                type="email"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />
            <input
                type="email"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />
            <input
                type="email"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />
            <Button
                type="submit"
                onClick={handleClick}
            >
                Submit
            </Button>
        </form>
    );
};

export default Contact;
