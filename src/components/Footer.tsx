export default function Footer(){
    return <>
        <footer data-testid="footer" className ="p-6 text-center text-sm text-black dark:text-white">
            <p>
                Copyright © {new Date().getFullYear()}. All rights reserved. Made by <a
                    href="https://github.com/parushapradhan"
                    target="_blank"
                    rel="noopener"
                >
                    <span className="text-white"> Parusha Pradhan</span>
                </a>
            </p>
        </footer>
    </>
}