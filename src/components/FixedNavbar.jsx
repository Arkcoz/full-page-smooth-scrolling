import React, { useContext } from 'react'
import styled from 'styled-components'
import { NavContext } from '../context/NavContext'

const Container = styled.div`
        position: fixed;
        top: 50%;
        left: 2rem;
        transform: translateY(-50%);
        padding: 1rem 0.5rem;
        height: auto;
        background-color: var(--secondary-background-color);
        border-radius: 40px;
    `

const NavContainer = styled.div`
        position: relative;
    `

const Nav = styled.div`
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        ul {
            list-style: none;
            padding: 0;
            margin: 0;

            button:not(.activeClass) {
                border-radius: 40px;
            }

            button.activeClass {
                background-color: var(--accent-color);
                border-radius: 40px;
            }


            button {
                width: 50px;
                height: 50px;
                border: none;
                background-color: transparent;
                font-size: 1.5rem;
                font-weight: 600;
                color : var(--white-color);
                transition: all 0.2s ease-in-out;
                cursor: none;

                
                &:hover {
                    background-color: var(--accent-color);
                }
            }
        }
    `

const FixedNavbar = () => {
    const { activeLinkId } = useContext(NavContext);

    const navLinks = [
        {
            label: "1",
            content: "first"
        },
        {
            label: "2",
            content: "second"
        },
        {
            label: "3",
            content: "third"
        },
        {
            label: "4",
            content: "fourth"
        }
    ]

    const renderNavLinks = (navLink) => {
        const scrollToId = `${navLink.content}-section`;

        const handleClickNav = () => {
            document.getElementById(scrollToId).scrollIntoView({ behavior: "smooth" })
        }

        return (
            <ul key={navLink.content}>
                <li>
                    <button
                        onClick={handleClickNav}
                        className={activeLinkId === navLink.content ? 'activeClass' : ""}
                    >{navLink.label}</button>
                </li>
            </ul>
        )
    }

    return (
        <Container>
            <NavContainer>
                <Nav>
                    {navLinks.map(nav => renderNavLinks(nav))}
                </Nav>
            </NavContainer>
        </Container>
    )
}

export default FixedNavbar