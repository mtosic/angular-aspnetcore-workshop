using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AspNetCoreWebApi.Controllers
{
    [Produces("application/json")]
    [Route("api/House")]
    public class HouseController : Controller
    {
        // GET: api/House
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "Arryn", "Frey", "Greyjoy", "Lannister", "Stark", "Tyrell", "Targaryen" };
        }

        // GET: api/House/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }
        
        // POST: api/House
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }
        
        // PUT: api/House/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }
        
        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
