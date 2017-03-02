using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AspNetCoreWebApi.Models;

namespace AspNetCoreWebApi.Controllers
{
    [Route("api/[controller]")]
    public class CharacterController : Controller
    {
        // GET api/values
        [HttpGet]
        public IEnumerable<Character> Get()
        {
            var characters = new List<Character>
            {
                new Character { Id = 1, Name = "Jon Snow"  },
                new Character { Id = 2, Name = "Arya Stark" },
                new Character { Id = 3, Name = "Cersei Lannister" },
                new Character { Id = 4, Name = "Tyrion Lannister" },
                new Character { Id = 5, Name = "Mellisandre" },
                new Character { Id = 6, Name = "Daenerys Targaryen" }
            };

            return characters;

        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
