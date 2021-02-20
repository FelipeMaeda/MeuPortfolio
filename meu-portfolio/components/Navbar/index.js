import React from 'react';
import { Bar, Link } from '../Navbar/styles.js'

export default function NavBar() {
    return (
        <Bar>
            <ul>
                <li>
                    <a href="/felipemaeda">Felipe Maeda</a>
                </li>
                <li>
                    <a href="/projetos">Projetos</a>
                </li>
                <li>
                    <a href="/github">Github</a>
                </li>
                <li>
                    <a href="/sobre">Sobre</a>
                </li>
                <li>
                    <a href="/contato">Contato</a>
                </li>
            </ul>
        </Bar>
    )
}