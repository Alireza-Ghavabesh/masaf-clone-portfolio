"use client"
import React, { useRef, useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { updateTopSiteBannerUrl, updateBottomLeftSiteBannerUrl, updateMidSiteBannerUrl, updateBottomRightSiteBannerUrl } from '@/services/posts';
import Image from "next/image";

const Page = () => {
  // top banner states
  const [topSiteBanner, setTopsiteBanner] = useState<File | null>(null);
  const [topSiteBannerLocalUrl, setTopsiteBannerLocalUrl] = useState<string>("");
  const topSiteBannerfileInputRef = useRef<HTMLInputElement | null>(null);
  // left banner states
  const [bottomLeftSiteBanner, setBottomLeftiteBanner] = useState<File | null>(null);
  const [bottomLeftBannerLocalUrl, setBottomLeftsiteBannerLocalUrl] = useState<string>("");
  const bottomLeftfileInputRef = useRef<HTMLInputElement | null>(null);
  // mid banner states
  const [midSiteBanner, setMidsiteBanner] = useState<File | null>(null);
  const [midSiteBannerLocalUrl, setMidsiteBannerLocalUrl] = useState<string>("");
  const midSiteBannerfileInputRef = useRef<HTMLInputElement | null>(null);
  // left banner states
  const [bottomRightSiteBanner, setBottomRightiteBanner] = useState<File | null>(null);
  const [bottomRightBannerLocalUrl, setBottomRightsiteBannerLocalUrl] = useState<string>("");
  const bottomRightfileInputRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className='pl-4'>

      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          maxWidth: '100%',

          margin: 'auto',
          padding: 2,
          border: '1px solid #ccc',
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h6" component="div" gutterBottom className='font-IRANSansWeb'>
          بروزرسانی محتوای صفحه اول سایت
        </Typography>

        {/* top banner */}
        <div className='flex items-center gap-2'>
          <TextField
            ref={topSiteBannerfileInputRef}
            type="file"
            label="بنر بالای سایت"
            sx={{ '& .MuiInputBase-input': { fontFamily: 'IRANSansWeb' } }}
            InputLabelProps={{
              shrink: true,
              style: { fontSize: '16px' } // Adjust the font size as needed
            }}
            inputProps={{ accept: 'image/*' }}
            fullWidth
            onInput={(e: any) => {
              const file = e.target.files[0];
              const imageUrl = URL.createObjectURL(file);
              setTopsiteBanner(() => {
                return file;
              });
              setTopsiteBannerLocalUrl(() => {
                return imageUrl;
              })
            }}
          />

          {topSiteBannerLocalUrl !== "" && (
            <div className='relative'>
              {/* <button
                onClick={() => {
                  setTopsiteBanner(null);
                  setTopsiteBannerLocalUrl("");
                  if (fileInputRef.current) {
                    fileInputRef.current.value = '';
                  }
                }}
                className='absolute top-1 left-1 rounded-full bg-red-400 w-5 h-5'>
              </button> */}
              <Image
                src={topSiteBannerLocalUrl}
                alt="Top Site Banner"
                width={200}
                height={50}
              />
            </div>
          )}


          <Button variant="contained" color="primary" onClick={async () => {
            // UpdateTopSiteBannerUrl(topSiteBanner) for call api
            const resultData = await updateTopSiteBannerUrl({ topSiteBanner: topSiteBanner })
            console.log(resultData)
            // console.log(topSiteBanner)
          }} sx={{ width: 150, fontSize: 20 }}>
            ذخیره
          </Button>
        </div>



        {/* left banner */}
        <div className='flex items-center gap-2'>
          <TextField
            ref={bottomLeftfileInputRef}
            type="file"
            label="بنر پایین سمت چپ"
            sx={{ '& .MuiInputBase-input': { fontFamily: 'IRANSansWeb' } }}
            InputLabelProps={{
              shrink: true,
              style: { fontSize: '16px' } // Adjust the font size as needed
            }}
            inputProps={{ accept: 'image/*' }}
            fullWidth
            onInput={(e: any) => {
              const file = e.target.files[0];
              const imageUrl = URL.createObjectURL(file);
              setBottomLeftiteBanner(() => {
                return file;
              });
              setBottomLeftsiteBannerLocalUrl(() => {
                return imageUrl;
              })
            }}
          />

          {bottomLeftBannerLocalUrl !== "" && (
            <div className='relative'>
              {/* <button
                onClick={() => {
                  setTopsiteBanner(null);
                  setTopsiteBannerLocalUrl("");
                  if (fileInputRef.current) {
                    fileInputRef.current.value = '';
                  }
                }}
                className='absolute top-1 left-1 rounded-full bg-red-400 w-5 h-5'>
              </button> */}
              <Image
                src={bottomLeftBannerLocalUrl}
                alt="bottomLeft Site Banner"
                width={200}
                height={50}
              />
            </div>
          )}


          <Button variant="contained" color="primary" onClick={async () => {
            // UpdateTopSiteBannerUrl(topSiteBanner) for call api
            const resultData = await updateBottomLeftSiteBannerUrl({ bottomLeftSiteBanner: bottomLeftSiteBanner })
            console.log(resultData)

          }} sx={{ width: 150, fontSize: 20 }}>
            ذخیره
          </Button>
        </div>


        {/* mid banner */}
        <div className='flex items-center gap-2'>
          <TextField
            ref={bottomLeftfileInputRef}
            type="file"
            label="بنر کوچک پایین وسط"
            sx={{ '& .MuiInputBase-input': { fontFamily: 'IRANSansWeb' } }}
            InputLabelProps={{
              shrink: true,
              style: { fontSize: '16px' } // Adjust the font size as needed
            }}
            inputProps={{ accept: 'image/*' }}
            fullWidth
            onInput={(e: any) => {
              const file = e.target.files[0];
              const imageUrl = URL.createObjectURL(file);
              setMidsiteBanner(() => {
                return file;
              });
              setMidsiteBannerLocalUrl(() => {
                return imageUrl;
              })
            }}
          />

          {midSiteBannerLocalUrl !== "" && (
            <div className='relative'>
              {/* <button
                onClick={() => {
                  setTopsiteBanner(null);
                  setTopsiteBannerLocalUrl("");
                  if (fileInputRef.current) {
                    fileInputRef.current.value = '';
                  }
                }}
                className='absolute top-1 left-1 rounded-full bg-red-400 w-5 h-5'>
              </button> */}
              <Image
                src={midSiteBannerLocalUrl}
                alt="bottomLeft Site Banner"
                width={200}
                height={50}
              />
            </div>
          )}


          <Button variant="contained" color="primary" onClick={async () => {
            // UpdateTopSiteBannerUrl(topSiteBanner) for call api
            const resultData = await updateMidSiteBannerUrl({ midSiteBanner: midSiteBanner })
            console.log(resultData)

          }} sx={{ width: 150, fontSize: 20 }}>
            ذخیره
          </Button>
        </div>



        {/* Right banner */}
        <div className='flex items-center gap-2'>
          <TextField
            ref={bottomRightfileInputRef}
            type="file"
            label="بنر پایین سمت راست"
            sx={{ '& .MuiInputBase-input': { fontFamily: 'IRANSansWeb' } }}
            InputLabelProps={{
              shrink: true,
              style: { fontSize: '16px' } // Adjust the font size as needed
            }}
            inputProps={{ accept: 'image/*' }}
            fullWidth
            onInput={(e: any) => {
              const file = e.target.files[0];
              const imageUrl = URL.createObjectURL(file);
              setBottomRightiteBanner(() => {
                return file;
              });
              setBottomRightsiteBannerLocalUrl(() => {
                return imageUrl;
              })
            }}
          />

          {bottomRightBannerLocalUrl !== "" && (
            <div className='relative'>
              {/* <button
                onClick={() => {
                  setTopsiteBanner(null);
                  setTopsiteBannerLocalUrl("");
                  if (fileInputRef.current) {
                    fileInputRef.current.value = '';
                  }
                }}
                className='absolute top-1 left-1 rounded-full bg-red-400 w-5 h-5'>
              </button> */}
              <Image
                src={bottomRightBannerLocalUrl}
                alt="bottomLeft Site Banner"
                width={200}
                height={50}
              />
            </div>
          )}


          <Button variant="contained" color="primary" onClick={async () => {
            const resultData = await updateBottomRightSiteBannerUrl({ bottomRightSiteBanner: bottomRightSiteBanner })
            console.log(resultData)

          }} sx={{ width: 150, fontSize: 20 }}>
            ذخیره
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default Page;
