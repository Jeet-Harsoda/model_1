import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Sample = () => {
    return (
        <>
            <header>
        <div>
            <h2>Home</h2>
        </div>
        <div>
            <h2>Log-in</h2>
        </div>
    </header>

    <div className="left-sidebar">
        <nav>
        <a href="svg_example.html">SVG example</a> <br />
        <a href="table_ir.html">Irregular table</a> <br />
        <a href="music_browser.html">Irregular table</a> <br />
        Nav content. <br />
        Nav content. <br />
        Nav content. <br />
        Nav content. <br />
        Nav content. <br />
        Nav content. <br />
        Nav content. <br />
        Nav content. <br />
        Nav content. <br />
        Nav content. <br />
        </nav>
    </div>

    <main>
        <div>
            <table>
                <tr>
                    <th>Enroll no.</th>
                    <th>Name</th>
                    <th>Branch</th>
                    <th>Grade</th>
                </tr>
                <tr>
                    <td>200001</td>
                    <td>John Smith</td>
                    <td>B.Tech.(I.T.)</td>
                    <td>9.0</td>
                </tr>
                <tr>
                    <td>200002</td>
                    <td>Jane Doe</td>
                    <td>B.Tech.(I.T.)</td>
                    <td>8.7</td>
                </tr>
                <tr>
                    <td>200003</td>
                    <td>Johnatdan Sims</td>
                    <td>B.Tech.(I.T.)</td>
                    <td>9.4</td>
                </tr>
                <tr>
                    <td>200004</td>
                    <td>John Baker</td>
                    <td>B.Tech.(I.T.)</td>
                    <td>8.2</td>
                </tr>
            </table>
        </div>


    </main>
    <div className="right-sidebar">
        <form action="#" method="POST">
            <div>
                <label htmlFor="enroll">Enrollment number:</label><br />
                <input required type="number" id="enroll" name="enroll" />
            </div>

            <div>
                <label htmlFor="name">Name:</label><br />
                <input required type="text" id="name" name="name" />
            </div>

            <div>
                <label htmlFor="branch">Branch:</label><br />
                <input required type="text" id="branch" name="branch" />
            </div>

            <div>
                <label htmlFor="grade">Grade:</label><br />
                <input required type="number" step="0.01" id="grade" name="grade" />
            </div>

            <div>
                <label htmlFor="studentEmail">Email:</label><br />
                <input required type="email" id="studentEmail" name="studentEmail" />
            </div>

            <div>
                <label htmlFor="phoneNumber">Phone number:</label><br />
                <input required type="tel" id="phoneNumber" name="phoneNumber" />
            </div>

            <div>
                <label htmlFor="birthdate">Birthdate:</label><br />
                <input required type="date" id="birthdate" name="birthdate" />
            </div>

            <div>
                <span>Passed:</span><br />
                <input required type="radio" id="passTrue" name="pass" value="true" />
                <label htmlFor="passTrue">True</label><br />

                <input required type="radio" id="passFalse" name="pass" value="false" />
                <label htmlFor="passFalse">False</label><br />
            </div>

            <div>
                <label htmlFor="groupColor">Group:</label><br />
                <input required type="color" id="groupColor" name="groupColor" />
            </div>

            <div>
                <label htmlFor="photo">Passport photo:</label><br />
                <input required type="file" id="photo" name="photo" />
            </div>

            <div>
                <label htmlFor="submitterEmail">Submitter Email:</label><br />
                <input required type="email" id="submitterEmail" name="submitterEmail" />
            </div>

            <div>
                <label htmlFor="password">Password:</label><br />
                <input required type="password" id="password" name="password" />
            </div>

            <div>
                <label htmlFor="submitterComments">Final comments:</label><br />
                <textarea id="submitterComments" name="submitterComments"></textarea>
            </div>

            <div>
                <input type="checkbox" id="final" name="final" />
                <label htmlFor="final">Everything is correct</label><br />
            </div>

            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>
    <footer>
        Footer content. <br />
        Footer content. <br />
        Footer content. <br />      
    </footer>
        </>
    );
};

export default Sample;
