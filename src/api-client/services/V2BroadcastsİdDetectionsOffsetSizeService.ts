/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2BroadcastsİdDetectionsOffsetSizeService {
    /**
     * Get detected objects from the stream based on offset and size
     * @returns any OK
     * @throws ApiError
     */
    public static getV2BroadcastsDetections({
        id,
        offset,
        size,
        accept,
    }: {
        id: string,
        offset: string,
        size: string,
        accept?: string,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/broadcasts/{id}/detections/{offset}/{size}',
            path: {
                'id': id,
                'offset': offset,
                'size': size,
            },
            headers: {
                'Accept': accept,
            },
        });
    }
}
