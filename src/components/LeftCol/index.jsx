import Selfie from '../../assets/image/selfie_resize_2.jpeg';

function LeftCol() {
    return (
        <div className="left-col">
            <div className="selfie">
                <img src={Selfie} alt='selfie de jlnko'/>
            </div>
        </div>
    )
}
export default LeftCol