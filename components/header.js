import { ConnectButton } from "web3uikit"

export default function Header() {
    return (
        <nav className="p-5 border-b-2 flex flex-row justify-between items-center">
            <div className="flex flex-row items-center py-4 px-4 font-bold text-3xl">
                <ConnectButton moralisAuth={false} />
            </div>
        </nav>
    )
}