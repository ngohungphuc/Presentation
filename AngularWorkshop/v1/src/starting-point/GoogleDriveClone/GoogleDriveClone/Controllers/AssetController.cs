using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GoogleDriveClone.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace GoogleDriveClone.Controllers
{
    [ApiController]
    [Authorize(AuthenticationSchemes = "Bearer")]
    [Route("api/[controller]/")]
    public class AssetController : Controller
    {
        private readonly IAssetService _assetService;
        public AssetController(IAssetService assetService)
        {
            _assetService = assetService;
        }

        [HttpGet("GetAll")]
        public async Task<IActionResult> GetAllAsset()
        {
            var assetList = await _assetService.GetAllAssets();
            return Ok(assetList);
        }
    }
}