﻿using Microsoft.AspNetCore.Authentication;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TweetBook.Domain;

namespace TweetBook.Services
{
    public interface IIdentityService
    {
        Task<AuthenticationResult> Register(string email, string password);
    }
}
