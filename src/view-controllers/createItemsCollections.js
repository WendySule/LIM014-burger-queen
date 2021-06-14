import React from 'react';

function createItem() {
    return (
    <div id ="createItems">
        Url Img<input/>
        Nombre<input/>
        Precio<input/>
        Categoría<input/>
        id<input/>
        'desayuno' o 'almuerzo'<input/>
        <button type="submit" onClick={() => {}}>Enviar</button>
    </div>
)
}
export default createItem