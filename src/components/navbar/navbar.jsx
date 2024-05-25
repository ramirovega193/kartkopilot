import React, {useState} from "react";
import "./navbarVg.css"
import SearchIcon from "../icons/search/icon";
import GoIcon from "../icons/go/icon"
import CloseIcon from "../icons/close/icon"
import BurgerIcon from "../icons/burger/icon"
import Image from "../../assets/UserImages/Avatar_cat.png"

function NavbarVg({}){

    const [isOpen, setIsOpen] = useState(false);

    function vgDeploy(){

        setIsOpen(!isOpen);

        setOn(false)
    
    }

    const [mbIsOn, setOn] = useState(false);

    function vgMobileOn(){
        setOn(!mbIsOn)
        setIsOpen(false)
    }

    return<>
    
        <div className="vg-nav">
        <div className="vg-nav-0">
            <h2 className="vg-nav-tl">Tu nombre</h2>
            <span className="vg-nav-i-mb" onClick={vgMobileOn}>{mbIsOn ? <CloseIcon /> : <BurgerIcon className={`vg-search-icon`} />}</span>
        </div>
        <div className="vg-nav-1">
            <ul className="vg-nav-ul">
                <li className="vg-nav-li">Home</li>
                <li className="vg-nav-li">Services</li>
                <li className="vg-nav-li">Information</li>
                <li className="vg-nav-li">Contact</li>
                <li className="vg-nav-li" onClick={vgDeploy}>{isOpen ? <CloseIcon /> : <SearchIcon className={`vg-search-icon`} />}</li>
            </ul>
        </div>
        <div className="vg-nav-1-mb">
            <ul className="vg-nav-ul-mb">
                <li className="vg-nav-li-mb" onClick={vgDeploy}>{isOpen ? <CloseIcon /> : <SearchIcon className={`vg-search-icon`} />}</li>
            </ul>
        </div>
        </div>
        
        <div className={`vg-nav-mb ${mbIsOn ? 'active' : ''}`}>
            <ul className="vg-nav-ul-t-mb">
                <li className="vg-nav-li-t-mb">Home</li>
                <li className="vg-nav-li-t-mb">Services</li>
                <li className="vg-nav-li-t-mb">Information</li>
                <li className="vg-nav-li-t-mb">Contact</li>
            </ul>
        </div>

        <div className={`vg-search-cont ${isOpen ? 'active' : ''}`}>
            <div className="vg-search">
                <input type="text" className="vg-search-bar" placeholder="Search..."/>
                <button type="button" className="vg-search-btn">Go <GoIcon /></button>
            </div>
        </div>
        
    
    </>

}
function NavWithUserVg({}){

    const [isOpenSearch, setIsOpenSearch] = useState(false);
    const [isOpenUser, setIsOpenUser] = useState(false);
    const [mbIsOn, setOn] = useState(false);

    function vgDeploySearch(){

        setIsOpenSearch(!isOpenSearch);

        setIsOpenUser(false);

        setOn(false)

    }   

    function vgDeployUser(){
        setIsOpenUser(!isOpenUser);

        setIsOpenSearch(false);

    }

    function vgMobileOn(){
        setOn(!mbIsOn)

        setIsOpenSearch(false)
    }

    return<>
    
        <div className="vg-nav">
        <div className="vg-nav-0">
            <img src={Image} alt="gatete" className={`vg-nav-image ${isOpenUser ? 'active' : ''}`} onClick={vgDeployUser}/>
            <span className="vg-nav-i-mb" onClick={vgMobileOn}>{mbIsOn ? <CloseIcon /> : <BurgerIcon className={`vg-search-icon`} />}</span>
        </div>
        <div className="vg-nav-1">
            <ul className="vg-nav-ul">
                <li className="vg-nav-li">Home</li>
                <li className="vg-nav-li">Services</li>
                <li className="vg-nav-li">information</li>
                <li className="vg-nav-li">Contact</li>
                <li className="vg-nav-li" onClick={vgDeploySearch}>{isOpenSearch ? <CloseIcon /> : <SearchIcon className={`vg-search-icon`} />}</li>
            </ul>
        </div>
        <div className="vg-nav-1-mb">
            <ul className="vg-nav-ul-mb">
                <li className="vg-nav-li-mb" onClick={vgDeploySearch}>{isOpenSearch ? <CloseIcon /> : <SearchIcon className={`vg-search-icon`} />}</li>
            </ul>
        </div>

        </div>
        
        <div className={`vg-nav-mb wUser ${mbIsOn ? 'active' : ''}`}>
                     <ul className="vg-nav-ul-t-mb">
                        <li className="vg-nav-li-t-mb">Home</li>
                        <li className="vg-nav-li-t-mb">Service</li>
                        <li className="vg-nav-li-t-mb">information</li>
                        <li className="vg-nav-li-t-mb">Contact</li>
                        <li className="vg-nav-li-t-mb">Go to user section</li>
                    </ul>
                </div>

        <div className={`vg-search-cont ${isOpenSearch ? 'active' : ''}`}>
            <div className="vg-search">
                <input type="text" className="vg-search-bar" placeholder="Search..."/>
                <button type="button" className="vg-search-btn">Go <GoIcon /></button>
            </div>
        </div>

        <div className={`vg-user-cont ${isOpenUser ? 'active' : ''}`}>

                <div className="vg-user-btn-i">
                    <div className="vg-u-b-i" onClick={vgDeployUser}><GoIcon /></div>
                </div>
            <div className="vg-user">
                <div className="vg-user-a">
                <div className="vg-user-image-cont">
                    <img src={Image} alt="gatete2" className="vg-user-image"/>
                </div>
                    <h2 className="vg-user-name">User</h2>
                </div>
                <div className="vg-user-op">
                    <ul className="vg-user-ul">
                        <li className="vg-user-li">Option 1</li>
                        <li className="vg-user-li">Option 1</li>
                        <li className="vg-user-li">Option 1</li>
                        <li className="vg-user-li li-u">Option 1</li>
                    </ul>
                </div>

                <div className="vg-user-c">
                    <button className="vg-user-btn">Sign Out</button>
                </div>
            </div>
        </div>
    </>

}

export {NavbarVg, NavWithUserVg};