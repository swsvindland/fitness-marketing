import { useState } from 'react';
import axios from 'axios';
import {Button} from "@/components/Button";
import {Field, Label} from "@/components/ui/fieldset";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";


const Contact = () => {
    const [email, setEmail] = useState('');
    const [body, setBody] = useState('');
    const [sent, setSent] = useState(false);

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = async (event) => {
        event.preventDefault();
        setSent(true);
        await axios.post('api/sendEmail', {
            email,
            body,
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
        <form className="w-full bg-white p-4 flex justify-center items-center flex-col gap-4">
            <Field className="w-96">
                <Label htmlFor="email">Email</Label>
                <Input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
            </Field>
            <Field className="w-96">
                <Label htmlFor="message">Message</Label>
                <Textarea
                    id="message"
                    value={body}
                    onChange={(event) => setBody(event.target.value)}
                />
            </Field>
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
