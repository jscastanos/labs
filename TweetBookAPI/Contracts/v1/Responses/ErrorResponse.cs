﻿using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TweetBookAPI.Contracts.v1.Responses
{
    public class ErrorResponse
    {
        public List<ErrorModel> Errors { get; set; } = new List<ErrorModel>();
    }
}
