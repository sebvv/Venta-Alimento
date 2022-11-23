using Microsoft.EntityFrameworkCore;
using VentaAlimentos.Models.Entidad;

namespace VentaAlimentos.Data
{
    public partial class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public virtual DbSet<Productos> Productos { get; set; } = null!;
        public virtual DbSet<TipoArticulo> TipoArticulo { get; set; }
        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<TipoArticulo>(entity =>
            {
                entity.HasKey(e => e.Codigo).HasName("PK_Neg_Feriados");

                entity.ToTable("Tipo_Articulo", "NEGOCIO");
            });

            modelBuilder.Entity<Productos>(entity =>
            {
                entity.HasKey(e => e.Codigo)
                    .HasName("Producto");

                entity.ToTable("Productos", "NEGOCIO");

                entity.Property(e => e.Codigo).ValueGeneratedNever();

                entity.Property(e => e.Descripcion).IsUnicode(false);

                entity.Property(e => e.DetalleProducto)
                    .IsUnicode(false)
                    .HasColumnName("Detalle_Producto");

                entity.Property(e => e.Img)
                    .HasColumnType("image")
                    .HasColumnName("IMG");

                entity.Property(e => e.TipoArticuloCodigo).HasColumnName("TipoArticulo_Codigo");

                entity.Property(e => e.Titulo)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });


            OnModelCreatingPartial(modelBuilder);
        }
    }
}
