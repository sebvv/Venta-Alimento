using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VentaAlimentos.Data;
using VentaAlimentos.Models.Entidad;

namespace VentaAlimentos.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TipoArticuloController : ControllerBase
    {
        private readonly DataContext _context;

        public TipoArticuloController(DataContext context)
        {
            _context = context;
        }

        // GET: api/TipoArticulo
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TipoArticulo>>> GetTipoArticulo()
        {
            return await _context.TipoArticulo.ToListAsync();
        }

        // GET: api/TipoArticulo/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TipoArticulo>> GetTipoArticulo(short id)
        {
            var tipoArticulo = await _context.TipoArticulo.FindAsync(id);

            if (tipoArticulo == null)
            {
                return NotFound();
            }

            return tipoArticulo;
        }

        // PUT: api/TipoArticulo/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTipoArticulo(short id, TipoArticulo tipoArticulo)
        {
            if (id != tipoArticulo.Codigo)
            {
                return BadRequest();
            }

            _context.Entry(tipoArticulo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TipoArticuloExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/TipoArticulo
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TipoArticulo>> PostTipoArticulo(TipoArticulo tipoArticulo)
        {
            _context.TipoArticulo.Add(tipoArticulo);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTipoArticulo", new { id = tipoArticulo.Codigo }, tipoArticulo);
        }

        // DELETE: api/TipoArticulo/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTipoArticulo(short id)
        {
            var tipoArticulo = await _context.TipoArticulo.FindAsync(id);
            if (tipoArticulo == null)
            {
                return NotFound();
            }

            _context.TipoArticulo.Remove(tipoArticulo);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TipoArticuloExists(short id)
        {
            return _context.TipoArticulo.Any(e => e.Codigo == id);
        }
    }
}
