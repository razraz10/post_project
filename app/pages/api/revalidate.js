export default async function handler(request, response){

    if(process.env.NODE_ENV !== 'production'){
        return response.json({massage: 'revalidate successfully'})
    }
    
    if(request.method === 'POST'){
        const{secret, paths}= request.body;

        if(secret !== process.env.REVALIDATE_SECRET){
            return response.status(401).json({massage: 'invalid secret'})
        }

        try{
            await Promise.all(paths.map((path) => fetch(path).then(() => response.revalidate())));
            console.log('revalidate successfully');
            return response.json({massage: 'revalidate successfully'})

        }catch(error){
            console.error(error);
            return response.status(500).json({massage:'server error'})
        }
    }
    return response.status(404).json({ message: 'Not found' });

}