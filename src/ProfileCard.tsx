import "./ProfileCard.css"
export const ProfileCard = () => {
    return (<div className="body flex flex-row">
        <div className="profile-card">
            <div className="profile-content">
                {/* <div className="profile-picture"> */}
                {/* <img src="https://drive.google.com/file/d/1t3ZkONHG6fczg7gnmZhbNK1J4J9Vv55l/view?usp=drive_link" alt=""></img> */}
                {/* </div> */}
                <h2 className="profile-name">
                    Abinash
                </h2>
                <p className="profile-description">
                    Student in EPITA, Paris , France
                </p>
                <br/>
                Email:<br/>
                abi11122005@gmail.com
                <div style={{textAlign:"left"}}>
                <ul className="social-icons">
                    <li>
                        <a href="https://www.linkedin.com/in/abinash-sasikumar-a484522aa/" className="underline">
                            <i className="fab fa-linkedin">LinkedIn</i>
                        </a>
                    </li>
                </ul>
                </div>
            </div>
        </div>
        <div style={styles.display} className="ml-10 mb-20">
            <h3 style={{textAlign:"left"}}>Your Profile Description:</h3>
            <p>Passionate about leveraging technology to create meaningful change,<br/>
                 I am an ambitious web developer dedicated to crafting innovative solutions<br/>
                that make a tangible impact. With a keen eye for detail and a knack for<br/>
                problem-solving, I thrive in dynamic environments where I can collaborate<br/>
                with like-minded individuals to push the boundaries of what's possible.</p>
        </div>
    </div>)
}
const styles = {
    container: {
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
    },
    textarea: {
        width: '100%',
        height: '150px',
        padding: '10px',
        fontSize: '16px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        marginBottom: '20px',
        resize: 'vertical',
    },
    display: {
        padding:"30px",
        borderRadius: '10px',
        backgroundColor: '#000052',
    }
};