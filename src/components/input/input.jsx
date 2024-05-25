import "./input.css"
import GoIcon from "../icons/go/icon"

function NormalInput({placeholder,name,id}){

    return<>
        <div className="vg-cont-input">
            <input type="text" name={name} id={id} required className="vg-input" />
            <div className="vg-label">{placeholder}</div>
        </div>

    </>
}

function InputWithIcon({placeholder,name,id,children}){

    return<>
        <div className="vg-cont-input-i">
            <input type="text" placeholder={placeholder} name={name} id={id} required className="vg-input-i" />
            <div className="vg-label-i">{children}</div>
        </div>

    </>
}

function Select(name){

    return<>

        <div className="vg-cont-select">
        <select name={name} id="" className="vg-Select">
            <option value="1" className="vg-s-options">Option 1</option>
            <option value="2" className="vg-s-options">Option 2</option>
            <option value="3" className="vg-s-options">Option 3</option>
            <option value="4" className="vg-s-options">Option 4</option>
        </select>
        <div className="vg-cont-icon">
            <GoIcon />
        </div>
        </div>
    </>

}
export {NormalInput,InputWithIcon,Select}