﻿using System.Collections.Generic;
using System.Linq;
using TweetBook.Contracts.v1.Requests.Queries;
using TweetBook.Contracts.v1.Responses;
using TweetBookAPI.Domain;
using TweetBookAPI.Services;

namespace TweetBookAPI.Helpers
{
    public class PaginationHelpers
    {
        public static PagedResponse<T> createPaginationResponse<T>(IUriService uriService, PaginationFilter pagination, List<T> response)
        {
            var nextPage = pagination.PageNumber >= 1 ? uriService
            .GetAllPostUri(new PaginationQuery(pagination.PageNumber + 1, pagination.PageSize)).ToString()
            : null;

            var previousPage = pagination.PageNumber - 1 >= 1 ? uriService
               .GetAllPostUri(new PaginationQuery(pagination.PageNumber - 1, pagination.PageSize)).ToString()
               : null;

            return new PagedResponse<T>
            {
                Data = response,
                PageNumber = pagination.PageNumber >= 1 ? pagination.PageNumber : (int?)null,
                PageSize = pagination.PageSize >= 1 ? pagination.PageSize : (int?)null,
                NextPage = response.Any() ? nextPage : null,
                PreviousPage = previousPage
            };
        }
    }
}