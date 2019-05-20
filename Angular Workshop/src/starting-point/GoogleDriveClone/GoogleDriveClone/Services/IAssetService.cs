using GoogleDriveClone.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoogleDriveClone.Services
{
    public interface IAssetService
    {
        Task<List<Asset>> GetAllAssets();
    }
}
