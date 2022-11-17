using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace VentaAlimentos.Models.Entidad;

public partial class TipoArticulo
{
    [Key]
    public short Codigo { get; set; }

    public string Descripcion { get; set; } = null!;
}
