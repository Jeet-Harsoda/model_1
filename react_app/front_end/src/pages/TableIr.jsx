import React from 'react';

const TableIr = () => {
    return (
        <>
            <table>
        <tr>
            <td colspan="2">A</td>
            <td colspan="5">B</td>
        </tr>
        <tr>
            <td>C</td>
            <td>D</td>
            <td>E</td>
            <td>F</td>
            <td>G</td>
            <td>H</td>
            <td rowspan="3">J</td>
        </tr>
        <tr>
            <td rowspan="2">K</td>
            <td>M</td>
            <td colspan="2">N</td>
            <td colspan="2">I</td>
        </tr>
        <tr>
            <td>L</td>
            <td>P</td>
            <td>O</td>
            <td>I</td>
            <td>H</td>
        </tr>
    </table>
        </>
    );
};

export default TableIr;
