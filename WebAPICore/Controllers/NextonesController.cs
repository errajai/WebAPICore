using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPICore.Data;
using WebAPICore.Models;

namespace WebAPICore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("NextonesPolicy")]
    public class NextonesController : ControllerBase
    {
        private readonly NextonContext _context;

        public NextonesController(NextonContext context)
        {
            _context = context;
        }

        // GET: api/Nextones
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Nextone>>> GetNextones()
        {
            return await _context.Nextones
                            .Include(i => i.Missions)
                            .ToListAsync();
        }

        // GET: api/Nextones/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Nextone>> GetNextone(int id)
        {
            var nextone = await _context.Nextones.FindAsync(id);

            if (nextone == null)
            {
                return NotFound();
            }

            return nextone;
        }

        // PUT: api/Nextones/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutNextone(int id, Nextone nextone)
        {
            if (id != nextone.NextoneId)
            {
                return BadRequest();
            }

            _context.Entry(nextone).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NextoneExists(id))
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

        // POST: api/Nextones
        [HttpPost]
        public async Task<ActionResult<Nextone>> PostNextone(Nextone nextone)
        {
            _context.Nextones.Add(nextone);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetNextone", new { id = nextone.NextoneId }, nextone);
        }

        // DELETE: api/Nextones/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Nextone>> DeleteNextone(int id)
        {
            var nextone = await _context.Nextones.FindAsync(id);
            if (nextone == null)
            {
                return NotFound();
            }

            _context.Nextones.Remove(nextone);
            await _context.SaveChangesAsync();

            return nextone;
        }

        private bool NextoneExists(int id)
        {
            return _context.Nextones.Any(e => e.NextoneId == id);
        }
    }
}
