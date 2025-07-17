/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2BroadcastsİdRtmpEndpointService {
    /**
     * Adds a third party rtmp end point to the stream. It supports adding after broadcast is started. Resolution can be specified to send a specific adaptive resolution. If an url is already added to a stream, trying to add the same rtmp url will return false.
     * @returns any OK
     * @throws ApiError
     */
    public static postV2BroadcastsRtmpEndpoint({
        id,
        contentType,
        accept,
        resolutionHeight,
        requestBody,
    }: {
        id: string,
        contentType?: string,
        accept?: string,
        /**
         * Resolution height of the broadcast that is wanted to send to the RTMP endpoint.
         */
        resolutionHeight?: string,
        requestBody?: Record<string, any>,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/broadcasts/{id}/rtmp-endpoint',
            path: {
                'id': id,
            },
            headers: {
                'Content-Type': contentType,
                'Accept': accept,
            },
            query: {
                'resolutionHeight': resolutionHeight,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Remove third pary rtmp end point from the stream. For the stream that is broadcasting, it will stop immediately
     * @returns any OK
     * @throws ApiError
     */
    public static deleteV2BroadcastsRtmpEndpoint({
        id,
        accept,
        endpointServiceId,
        resolutionHeight,
    }: {
        id: string,
        accept?: string,
        /**
         * (Required) RTMP url of the endpoint that will be stopped.
         */
        endpointServiceId?: string,
        /**
         * (Required) Resolution specifier if endpoint has been added with resolution. Only applicable if user added RTMP endpoint with a resolution speficier. Otherwise won't work and won't remove the endpoint.
         */
        resolutionHeight?: string,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v2/broadcasts/{id}/rtmp-endpoint',
            path: {
                'id': id,
            },
            headers: {
                'Accept': accept,
            },
            query: {
                'endpointServiceId': endpointServiceId,
                'resolutionHeight': resolutionHeight,
            },
        });
    }
}
