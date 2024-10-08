import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Todo List App",
    description: "A todo list App",
};

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">

            <body className={inter.className}>
              
                {children}

            </body>
        </html>
    );
}
