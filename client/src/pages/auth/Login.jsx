
import { LoginForm } from "../../components/LoginForm.jsx"

export const LoginPage = () => {

    return (

        <main className="h-screen w-screen bg-neutral-950 flex items-center justify-center gap-8">

            <article className="w-1/2 h-full lg:flex items-center justify-center hidden auth-bg-img">

                <h1 className="text-5xl font-bold text-neutral-100">
                    Bienvenido a Workflow
                </h1>
                
            </article>

            <article className="lg:w-1/2 w-full h-full flex items-center justify-center">
                <LoginForm />
            </article>
        
        </main>
    )
}