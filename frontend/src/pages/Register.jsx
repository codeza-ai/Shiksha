const Register = () =>{
    return (
        <div>
            <div>

            </div>
            <div>
                <form action="">
                    <div>
                        <label htmlFor="full-name">Full Name: </label>
                        <input type="text" id="full-name" name="full-name" />
                        <label htmlFor="email">Email: </label>
                        <input type="email" id="email" name="email" />
                        <label htmlFor="mobile">Mobile number:</label>
                        <input type="tel" id="mobile" name="mobile" />
                        <label htmlFor="age">Age: </label>
                        <input type="number" id="age" name="age" />
                        <label htmlFor="class">Class: </label>
                        <input type="number" id="class" name="class" />
                        <label htmlFor="school">School: </label>
                        <select name="school" id="school">
                            <option value="JNV Bharuch">JNV Bharuch</option>
                            <option value="KV">KV - IIM Kolkata</option>
                        </select>
                    </div>
                    <div>
                        <button type="submit">Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Register;