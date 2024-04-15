using API.Controllers;
using Microsoft.AspNetCore.Mvc;


namespace API;

public class BuggyController : BaseApiController
{
    [HttpGet("not-found")]
    public ActionResult GetNotFound()
    {
        return NotFound();
    }

    [HttpGet("unauthorized")]
    public ActionResult GetUnauthorized()
    {
        return Unauthorized();
    }

    [HttpGet("bad-request")]
    public ActionResult GetBadRequset()
    {
        return BadRequest(new ProblemDetails { Title = "This is a bad request" });
    }

    [HttpGet("validation-error")]
    public ActionResult GetValidationError()
    {
        ModelState.AddModelError("Problem1", "This is the first problem");
        ModelState.AddModelError("Problem2", "This is the second problem");
        return ValidationProblem();
    }

    [HttpGet("server-error")]
    public ActionResult GetServerError()
    {
        throw new Exception("Server error");
    }

}
