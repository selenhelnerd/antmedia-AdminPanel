/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2VodsDirectoryService {
    /**
     * Import VoD files from a directory and make it streamable.
     * @returns any OK
     * @throws ApiError
     */
    public static postV2VodsDirectory({
        accept,
        directory,
        requestBody,
    }: {
        accept?: string,
        /**
         * the full path of the directory that VoD files will be imported to datastore and linked to the streams
         */
        directory?: string,
        requestBody?: any,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/vods/directory',
            headers: {
                'Accept': accept,
            },
            query: {
                'directory': directory,
            },
            body: requestBody,
        });
    }
    /**
     * Unlinks VoD path from streams directory and delete the database record. It does not delete the files. It only unlinks folder and delete database records
     * @returns any OK
     * @throws ApiError
     */
    public static deleteV2VodsDirectory({
        accept,
        directory,
    }: {
        accept?: string,
        /**
         * the full path of the directory that imported VoD files will be deleted from database.
         */
        directory?: string,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v2/vods/directory',
            headers: {
                'Accept': accept,
            },
            query: {
                'directory': directory,
            },
        });
    }
}
