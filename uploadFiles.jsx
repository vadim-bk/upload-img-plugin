import Router from 'next/router'
import Link from 'next/link';

export default function UploadFilesPage() {
  return (
    <section className='cred-section'>
      <div className='cred-container'>
        <div className='cred-media'>
          <div className='cred-media__item' />
        </div>
        <div className='cred-main cred-main--with-footer'>
          <button className='cred-back' onClick={Router.back}>
            <svg
              className='stroke'
              width='6'
              height='10'
              viewBox='0 0 6 10'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M5.25 9.5L0.75 5L5.25 0.5'
                stroke='#7A7B7F'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            Back
          </button>
          <div className='cred-box cred-box--type2'>
            <p className='cred-title cred-title--centered cred-title--smaller'>
              Create your cleaner company
            </p>
            <div className='cred-text cred-text--centered'>
              <p>
                You disposal strongly quitting his endeavor two settling him. Manners ham him
                hearted hundred expense.
              </p>
            </div>
            <div className='company-create-doc'>
              <div className='upload-doc'>
                <div className='upload-doc__info'>
                  <p className='upload-doc__text'>Upload your Article of incorporation</p>
                  <p className='upload-doc__files'>(Files: png. jpeg. pdf. zip. doc.)</p>
                </div>
                <div className='d-flex upload-doc__box'>
                  <div className='upload-file'>
                    <input type='file' className='upload-file__input' />
                    <span className='d-flex upload-file__icon'>
                      <svg
                        className='stroke'
                        width='18'
                        height='19'
                        viewBox='0 0 18 19'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M15.75 11.75V14.75C15.75 15.1478 15.592 15.5294 15.3107 15.8107C15.0294 16.092 14.6478 16.25 14.25 16.25H3.75C3.35218 16.25 2.97064 16.092 2.68934 15.8107C2.40804 15.5294 2.25 15.1478 2.25 14.75V11.75'
                          stroke='#B3B3B3'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M5.25 8L9 11.75L12.75 8'
                          stroke='#B3B3B3'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M9 11.75V2.75'
                          stroke='#B3B3B3'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className='upload-doc'>
                <div className='upload-doc__info'>
                  <p className='upload-doc__text'>Upload your bank account</p>
                  <p className='upload-doc__files'>(Files: png. jpeg. pdf. zip. doc.)</p>
                </div>
                <div className='d-flex upload-doc__box'>
                  <div className='upload-file'>
                    <input type='file' className='upload-file__input' />
                    <span className='d-flex upload-file__icon'>
                      <svg
                        className='stroke'
                        width='18'
                        height='19'
                        viewBox='0 0 18 19'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M15.75 11.75V14.75C15.75 15.1478 15.592 15.5294 15.3107 15.8107C15.0294 16.092 14.6478 16.25 14.25 16.25H3.75C3.35218 16.25 2.97064 16.092 2.68934 15.8107C2.40804 15.5294 2.25 15.1478 2.25 14.75V11.75'
                          stroke='#B3B3B3'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M5.25 8L9 11.75L12.75 8'
                          stroke='#B3B3B3'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M9 11.75V2.75'
                          stroke='#B3B3B3'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className='upload-doc'>
                <div className='upload-doc__info'>
                  <p className='upload-doc__text'>Upload your W9form</p>
                  <p className='upload-doc__files'>(Files: png. jpeg. pdf. zip. doc.)</p>
                </div>
                <div className='d-flex upload-doc__box'>
                  <div className='upload-file'>
                    <input type='file' className='upload-file__input' />
                    <span className='d-flex upload-file__icon'>
                      <svg
                        className='stroke'
                        width='18'
                        height='19'
                        viewBox='0 0 18 19'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M15.75 11.75V14.75C15.75 15.1478 15.592 15.5294 15.3107 15.8107C15.0294 16.092 14.6478 16.25 14.25 16.25H3.75C3.35218 16.25 2.97064 16.092 2.68934 15.8107C2.40804 15.5294 2.25 15.1478 2.25 14.75V11.75'
                          stroke='#B3B3B3'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M5.25 8L9 11.75L12.75 8'
                          stroke='#B3B3B3'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M9 11.75V2.75'
                          stroke='#B3B3B3'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className='upload-doc'>
                <div className='upload-doc__info'>
                  <p className='upload-doc__text'>Upload your insurance</p>
                  <p className='upload-doc__files'>(Files: png. jpeg. pdf. zip. doc.)</p>
                </div>
                <div className='d-flex upload-doc__box'>
                  <div className='upload-file'>
                    <input type='file' className='upload-file__input' />
                    <span className='d-flex upload-file__icon'>
                      <svg
                        className='stroke'
                        width='18'
                        height='19'
                        viewBox='0 0 18 19'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M15.75 11.75V14.75C15.75 15.1478 15.592 15.5294 15.3107 15.8107C15.0294 16.092 14.6478 16.25 14.25 16.25H3.75C3.35218 16.25 2.97064 16.092 2.68934 15.8107C2.40804 15.5294 2.25 15.1478 2.25 14.75V11.75'
                          stroke='#B3B3B3'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M5.25 8L9 11.75L12.75 8'
                          stroke='#B3B3B3'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M9 11.75V2.75'
                          stroke='#B3B3B3'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className='cred-confirm'>
              <button className='button button--big button--type2 ' disabled>
                Next
              </button>
              <Link href='/singUp/provider/finish'>
                <a className='button button--link-type'>Skip</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
