using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace VentaAlimentos.Models.Entidad
{
    public partial class Productos
    {
        [Key]
        public int Codigo { get; set; }
        public string Titulo { get; set; } = null!;
        public byte[]? Img { get; set; }
        public string? Descripcion { get; set; }
        public string? DetalleProducto { get; set; }
        public int? Cantidad { get; set; }
        public int? Valor { get; set; }
        public short TipoArticuloCodigo { get; set; }
    }
}
