import {useLoginForm} from "./useLoginForm.ts";

export const LoginForm = () => {
    const {showError, handleSubmit, handlerLogIn, errors, register, isValid} = useLoginForm();

    return (
        <div className='min-h-screen flex items-center justify-center bg-white px-4'>
            <div className='w-full max-w-sm bg-white shadow-2xl rounded-2xl p-10 flex flex-col items-center justify-center mt-32'>
                <h2 className='text-3xl font-extrabold mb-8 text-center text-black tracking-wide'>Sign in to NETFilms</h2>

                {showError && (
                    <div className='text-red-500 text-center mb-4 font-semibold rounded-xl bg-red-100/60 py-2 px-4'>
                        Wrong username or password
                    </div>
                )}

                <form onSubmit={handleSubmit(handlerLogIn)} className='flex flex-col gap-6 w-full'>
                    <div className='flex flex-col gap-2'>
                        <label className='text-base font-semibold text-gray-700 pl-1'>
                            {errors.username ? (
                                <span className='text-red-500'>{errors.username.message}</span>
                            ) : 'Username'}
                        </label>
                        <input
                            type='text'
                            {...register('username')}
                            className='bg-gray-100 border border-gray-300 rounded-xl p-4 text-black text-lg focus:outline-none focus:ring-2 focus:ring-black transition placeholder:text-gray-400 shadow-sm'
                            placeholder='Enter your username'
                        />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label className='text-base font-semibold text-gray-700 pl-1'>
                            {errors.password ? (
                                <span className='text-red-500'>{errors.password.message}</span>
                            ) : 'Password'}
                        </label>
                        <input
                            type='password'
                            {...register('password')}
                            className='bg-gray-100 border border-gray-300 rounded-xl p-4 text-black text-lg focus:outline-none focus:ring-2 focus:ring-black transition placeholder:text-gray-400 shadow-sm'
                            placeholder='Enter your password'
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={!isValid}
                        className='mt-2 bg-black text-white font-bold py-3 rounded-xl text-lg shadow-lg transition hover:bg-neutral-800 focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 disabled:bg-gray-300 disabled:text-gray-500 duration-200'
                    >
                        Log In
                    </button>
                </form>
            </div>
        </div>
    );
};