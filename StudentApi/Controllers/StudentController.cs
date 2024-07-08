using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StudentAPI.Data;

namespace StudentAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase{

        private readonly DataContext _context;

        public StudentController(DataContext context){
            _context = context;
        }

        [HttpGet]

        public async Task<ActionResult<List<Student>>> GetStudents()
        {
            return Ok(await _context.Students.ToListAsync());
        }
        [HttpPost]

        public async Task<ActionResult<List<Student>>> CreateStudent(Student student)
        {
            student.Id =0 ;
            _context.Students.Add(student);

            await _context.SaveChangesAsync();
            
            return Ok(await _context.Students.ToListAsync());
        }

        
        [HttpPut]
        public async Task<ActionResult<List<Student>>> UpdateStudent(Student student)
        {
            var dbstudent = await _context.Students.FindAsync(student.Id);
            if (dbstudent == null)
                return BadRequest("student not found.");

            
            dbstudent.FirstName = student.FirstName;
            dbstudent.LastName = student.LastName;
            dbstudent.CodeMassar = student.CodeMassar;
            dbstudent.Age = student.Age;

            await _context.SaveChangesAsync();

            return Ok(await _context.Students.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Student>>> DeleteStudent(int id)
        {
            var dbstudent = await _context.Students.FindAsync(id);
            if (dbstudent == null)
                return BadRequest("student not found.");

            _context.Students.Remove(dbstudent);
            await _context.SaveChangesAsync();

            return Ok(await _context.Students.ToListAsync());
        }


    }
}