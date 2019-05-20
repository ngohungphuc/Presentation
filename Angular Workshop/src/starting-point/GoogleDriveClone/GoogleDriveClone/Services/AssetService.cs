using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GoogleDriveClone.Models;
using Microsoft.EntityFrameworkCore;

namespace GoogleDriveClone.Services
{
    public class AssetService: IAssetService
    {
        private readonly IUnitOfWork _unitOfWork;
        public AssetService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        public async Task<List<Media>> GetAllAssets()
        {
            var assetList = await _unitOfWork.Repository<Media>().Query().ToListAsync();

            return assetList;
        }
    }
}
