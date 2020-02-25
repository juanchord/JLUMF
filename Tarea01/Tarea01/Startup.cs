using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Tarea01.Startup))]
namespace Tarea01
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
