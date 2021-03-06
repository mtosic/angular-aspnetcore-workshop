﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AspNetCoreWebApi.Models;
using AspNetCoreWebApi.Data;

namespace AspNetCoreWebApi.Controllers
{
    [Route("api/[controller]")]
    public class CharacterController : Controller
    {
        private readonly GoTContext db;
        public CharacterController(GoTContext context)
        {
            db = context;
        }


        // GET api/values
        [HttpGet]
        public IEnumerable<Character> Get()
        {
            var characters = db.Characters.ToList();

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
