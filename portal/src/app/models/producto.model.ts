export interface iProductoResponse {
    entries: iProducto[]
}

export interface iProducto {
    codigo: number,
    titulo: string,
    img: string | null,
    descripcion: string| null,
    detalleProducto: string| null,
    cantidad: number| null,
    valor: number| null,
    tipoArticulo: number

}