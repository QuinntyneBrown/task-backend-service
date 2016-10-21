using TaskBackendService.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TaskBackendService.Services
{
    public class CacheProvider : ICacheProvider
    {
        public ICache GetCache()
        {
            return MemoryCache.Current;
        }
    }
}
